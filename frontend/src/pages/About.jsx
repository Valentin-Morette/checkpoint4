import placeholder from "../assets/img/trombi.png";

export default function About() {
  return (
    <div>
      <h1 className="text-center mt-8 text-2xl md:mb-8">A propos de moi</h1>
      <div className="flex flex-col items-center mx-8 md:gap-12 md:flex-row">
        <img className="img-about" src={placeholder} alt="Trombi" />
        <p className="w-full mx-8 md:max-w-[50%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          dolorem sequi quo maxime modi, nemo distinctio itaque accusantium
          neque molestiae tempore reprehenderit tempora recusandae temporibus
          omnis impedit dolores! Molestias, recusandae. reprehenderit tempora
          recusandae temporibus omnis impedit dolores! Molestias, recusandae.
        </p>
      </div>
      <div className="flex flex-col-reverse items-center mx-8 md:gap-12 md:flex-row">
        <p className="w-full mx-8 md:max-w-[50%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          dolorem sequi quo maxime modi, nemo distinctio itaque accusantium
          neque molestiae tempore reprehenderit tempora recusandae temporibus
          omnis impedit dolores! Molestias, recusandae. reprehenderit tempora
          recusandae temporibus omnis impedit dolores! Molestias, recusandae.
        </p>
        <img className="img-about" src={placeholder} alt="Trombi" />
      </div>
      <div className="flex flex-col items-center mx-8 md:gap-12 md:flex-row">
        <img className="img-about" src={placeholder} alt="Trombi" />
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
