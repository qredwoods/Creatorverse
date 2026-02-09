import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";

const emptyForm = {
  name: "",
  url: "",
  description: "",
  imageURL: "",
};

export default function CreatorSettings({ onSave }) {
  const { id } = useParams();            // exists only on /creators/:id/edit
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEdit); // if edit, load existing data
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!isEdit) return;

    let isMounted = true;

    async function fetchCreatorToEdit() {
      setLoading(true);
      setErrorMsg("");

      const { data, error } = await supabase
        .from("creators")
        .select("name, url, description, imageURL")
        .eq("id", id)
        .single();

      if (!isMounted) return;

      if (error) {
        setErrorMsg(error.message);
      } else {
        setForm({
          name: data.name ?? "",
          url: data.url ?? "",
          description: data.description ?? "",
          imageURL: data.imageURL ?? "",
        });
      }

      setLoading(false);
    }

    fetchCreatorToEdit();

    return () => {
      isMounted = false;
    };
  }, [id, isEdit]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    // minimal validation
    if (!form.name.trim()) {
      setErrorMsg("Name is required.");
      return;
    }

    if (isEdit) {
      // UPDATE
      const { error } = await supabase
        .from("creators")
        .update({
          name: form.name,
          url: form.url,
          description: form.description,
          imageURL: form.imageURL || null,
        })
        .eq("id", id);

      if (error) {
        setErrorMsg(error.message);
        return;
      }
      // updates full list of creators
      if (onSave) await onSave();
      navigate(`/creators/${id}`);
    } else {
      // CREATE
      const { data, error } = await supabase
        .from("creators")
        .insert([
          {
            name: form.name,
            url: form.url,
            description: form.description,
            imageURL: form.imageURL || null,
          },
        ])
        .select()
        .single();

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      // go to the new creator’s detail page, while also refreshing home's full list of creators
      if (onSave) await onSave();
      navigate(`/creators/${data.id}`);
    }
  }

  if (loading) return <p>Loading…</p>;

  return (
    <div>
      <h1>{isEdit ? "Edit Creator" : "Add Creator"}</h1>

      {errorMsg && <p style={{ color: "crimson" }}>{errorMsg}</p>}

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 520 }}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>

        <label>
          URL
          <input name="url" value={form.url} onChange={handleChange} />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
          />
        </label>

        <label>
          Image URL (optional)
          <input name="imageURL" value={form.imageURL} onChange={handleChange} />
        </label>

        <button type="submit">{isEdit ? "Save Changes" : "Create Creator"}</button>
      </form>
    </div>
  );
}
