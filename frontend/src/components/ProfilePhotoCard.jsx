import { useEffect, useState } from "react";

const PROFILE_PHOTO_SRC = "/profile-photo.jpg";

export function ProfilePhotoCard({ name, title }) {
  const [imageAvailable, setImageAvailable] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.onload = () => setImageAvailable(true);
    img.onerror = () => setImageAvailable(false);
    img.src = PROFILE_PHOTO_SRC;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  const showImage = imageAvailable !== false && !imageError;

  return (
    <section className="card photo-card">
      {showImage ? (
        <img
          src={PROFILE_PHOTO_SRC}
          alt={name}
          className="profile-photo"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="photo-fallback" aria-label={`${name} photo placeholder`}>
          <span>AK</span>
        </div>
      )}

      <div className="photo-meta">
        <p className="eyebrow">Profile</p>
        <h2>{name}</h2>
        <p className="section-description">{title}</p>
      </div>
    </section>
  );
}
