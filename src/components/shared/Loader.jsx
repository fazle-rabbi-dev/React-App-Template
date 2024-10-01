import FadeLoader from "react-spinners/ClipLoader";

export const Loader = ({ color }) => {
  return (
    <div className="flex-center">
      <FadeLoader
        color={color || "#181818"}
        // loading={loading}
        // cssOverride={override}
        size={28}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

