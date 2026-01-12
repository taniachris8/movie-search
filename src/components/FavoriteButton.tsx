type FavoriteBtnProps = {
  onClick: () => void;
  isFavorite: boolean;
};

export function FavoriteBtn({ onClick, isFavorite }: FavoriteBtnProps) {
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
        className="favorite-icon"
      />
    </>
  );
}
