import { useState } from "react";
import { API_URL } from "../../../config";
import { useUser } from "../../../context/UserContext";
import "./Settings.css";

/* Selecting a file loads it into an Image object to read its actual dimensions before upload. If under 200x200, it shows a warning but still allows the upload.
The preview updates immediately using URL.createObjectURL, so the user sees what they picked before committing. On successful upload, updateUser (from useUser/UserContext)
is called with the new avatarUrl, which updates both the shared user state and localStorage. */

function Settings() {

    const [avatarPreview, setAvatarPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const { updateUser } = useUser();

    function handleFileChange(event) {

        const file = event.target.files[0];
        setError("");

        if (!file) return;

        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = () => {

            if (img.width < 200 || img.height < 200) {

                setError("For best results, use an image at least 200x200px.");

            }

            setSelectedFile(file);
            setAvatarPreview(img.src);

        };

    }

    async function handleUpload() {

        if (!selectedFile) return;

        setIsUploading(true);
        setError("");

        try {

            const formData = new FormData();
            formData.append("avatar", selectedFile);

            const response = await fetch(`${API_URL}/api/users/avatar`, {

                method: "PATCH",
                headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` },
                body: formData,

            });

            const data = await response.json();

            if (!response.ok) {

                throw new Error(data.message || "Upload failed");

            }

            updateUser({ avatarUrl: data.avatarUrl });

            setSelectedFile(null);

        } catch (uploadError) {

            setError(uploadError.message);

        } finally {

            setIsUploading(false);

        }

    }

    return (

        <div className="settings-page">

            <h2>Settings</h2>

            <p className="settings-notice">This settings page is currently being updated.</p>

            <section className="settings-avatar-section">

                <h3>Profile Picture</h3>

                <div className="settings-avatar-preview">

                    {avatarPreview ? (

                        <img src={avatarPreview} alt="Avatar preview" />

                    ) : (

                        <i className="fa-solid fa-circle-user"></i>

                    )}

                </div>

                <input type="file" accept="image/*" onChange={handleFileChange} />

                {error && <p className="settings-error">{error}</p>}

                <button onClick={handleUpload} disabled={!selectedFile || isUploading}>

                    {isUploading ? "Uploading..." : "Upload Photo"}

                </button>

            </section>

        </div>

    );

}

export default Settings;