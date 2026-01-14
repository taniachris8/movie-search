type FavoriteBtnProps = {
  isFavorite: boolean;
  onClick: () => void;
};

export function FavoriteBtn({ isFavorite, onClick }: FavoriteBtnProps) {
  return (
    <>
      <img
        onClick={onClick}
        src={
          !isFavorite
            ? "/icons/icons8-heart-50 (6).png"
            : "/icons/icons8-heart-50 (1).png"
        }
        alt="favorite icon"
        style={{
          width: "24px",
          height: "24px",
          cursor: "pointer",
        }}
      />
    </>
  );
}
