export default function About() {
  return (
    <div>
      <h1 className="text-center mt-8 text-2xl md:mb-8">A propos de moi</h1>
      <div className="div-about">
        <img
          className="img-about"
          src="https://loremflickr.com/320/240/dog?lock=1"
          alt="Trombi"
        />
        <p className="w-full mx-8 md:max-w-[50%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          dolorem sequi quo maxime modi, nemo distinctio itaque accusantium
          neque molestiae tempore reprehenderit tempora recusandae temporibus
          omnis impedit dolores! Molestias, recusandae. reprehenderit tempora
          recusandae temporibus omnis impedit dolores! Molestias, recusandae.
        </p>
      </div>
      <div className="div-about md:flex-row-reverse">
        <img
          className="img-about"
          src="https://loremflickr.com/320/240/dog?lock=5"
          alt="Trombi"
        />
        <p className="w-full mx-8 md:max-w-[50%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          dolorem sequi quo maxime modi, nemo distinctio itaque accusantium
          neque molestiae tempore reprehenderit tempora recusandae temporibus
          omnis impedit dolores! Molestias, recusandae. reprehenderit tempora
          recusandae temporibus omnis impedit dolores! Molestias, recusandae.
        </p>
      </div>
      <div className="div-about">
        <img
          className="img-about"
          src="https://loremflickr.com/320/240/dog?lock=4"
          alt="Trombi"
        />
        <p className="w-full mx-8 mb-8 md:max-w-[50%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          dolorem sequi quo maxime modi, nemo distinctio itaque accusantium
          neque molestiae tempore reprehenderit tempora recusandae temporibus
          omnis impedit dolores! Molestias, recusandae. reprehenderit tempora
          recusandae temporibus omnis impedit dolores! Molestias, recusandae.
        </p>
      </div>
    </div>
  );
}
