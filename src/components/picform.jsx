import url from "../../config";

export default function (prop) {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target); // Gather form data

    try {
      const response = await fetch(`${url}/api/event/${prop.id}/pics`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (response.ok) {
        // Call the prop function after successful submission
        prop.fun();
      } else {
        console.error("Failed to upload photos.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="name">Upload photos (only ten allowed)</label>
        <input type="file" name="photos" multiple />
        <input type="submit" />
      </form>
    </>
  );
}
