export default function Admin() {
  return (
    <form
      className="flex flex-col gap-2"
      action="http://localhost:5000/project"
      method="POST"
    >
      <label htmlFor="name">
        Name : <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="description">
        Description : <input type="text" name="description" id="description" />
      </label>
      <label htmlFor="date">
        Date : <input type="text" name="date" id="date" />
      </label>
      <label htmlFor="image">
        Image : <input type="text" name="image" id="image" />
      </label>
      <label htmlFor="link">
        Link : <input type="text" name="link" id="link" />
      </label>

      <button type="submit">Envoyer</button>
    </form>
  );
}
