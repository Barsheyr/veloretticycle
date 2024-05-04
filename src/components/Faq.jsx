import React from "react";

const Faq = () => {
  return (
    <section className="py-20">
      <h1 className="lg:text-8xl text-5xl tracking-wide leading-looset text-center">
        Any questions ?
      </h1>

      <div className="max-w-5xl mx-auto mt-20 space-y-5">
        <div className="collapse collapse-plus border-b-2 rounded-none">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-3xl font-light">
            What about the paper work ?
          </div>
          <div className="collapse-content">
            <p className="font-light">
              The bicycle plan is set up so that there will be no administrative
              work on your part as the employer. You can use a free online
              platform that has been created by our leasing partner. This
              provides you with a simple overview of your business and your
              employees, allowing you to arrange everything. It also simplifies
              all the paperwork. Everything is organised with just a few clicks.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b-2 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-3xl font-light">
            What does a Veloretti Bike Plan cost for an employer?
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              alias voluptatibus unde dolor nulla explicabo sed nisi et eos vero
              debitis qui ipsa facere doloremque atque veniam quibusdam commodi
              nemo a aliquam quis, beatae nam pariatur blanditiis. Rem vel
              laboriosam sequi excepturi? Doloremque, nisi. Labore iusto aperiam
              voluptas cum illum enim earum amet culpa consequatur, quidem,
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b-2 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-3xl font-light">
            How is the insurance & maintenance arranged when leasing a Veloretti
            bike?
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              esse at atque dolor rem, quis quod dignissimos necessitatibus
              architecto maxime, debitis harum aspernatur corrupti explicabo
              nobis inventore quos? Corrupti nulla fugiat saepe impedit, sit
              accusantium in quis odio recusandae dolorem voluptatum deserunt
              maxime repellendus molestias illo asperiores fuga explicabo quas!
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b-2 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-3xl font-light">
            How does it work with an employee who retires early ?
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              esse at atque dolor rem, quis quod dignissimos necessitatibus
              architecto maxime, debitis harum aspernatur corrupti explicabo
              nobis inventore quos? Corrupti nulla fugiat saepe impedit, sit
              accusantium in quis odio recusandae dolorem voluptatum deserunt
              maxime repellendus molestias illo asperiores fuga explicabo quas!
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b-2 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-3xl font-light">
            What are the legal requirements for the veloretti bicycle plan?
          </div>
          <div className="collapse-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              esse at atque dolor rem, quis quod dignissimos necessitatibus
              architecto maxime, debitis harum aspernatur corrupti explicabo
              nobis inventore quos? Corrupti nulla fugiat saepe impedit, sit
              accusantium in quis odio recusandae dolorem voluptatum deserunt
              maxime repellendus molestias illo asperiores fuga explicabo quas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
