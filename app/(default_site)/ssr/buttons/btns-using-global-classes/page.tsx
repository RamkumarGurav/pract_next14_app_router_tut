export default function PageName() {
  return (
    <div className=" p-10">
      <h1>button sizes</h1>
      <div className="flex  items-center gap-2 ">
        <button
          type="button"
          className="btn btn-xs btn-focus btn-primary uppercase"
        >
          esmall
        </button>
        <button className="btn btn-sm btn-focus btn-primary uppercase">
          small
        </button>
        <button className="btn   btn-focus btn-primary uppercase">base</button>
        <button className="btn btn-lg btn-focus btn-primary uppercase">
          large
        </button>
        <button className="btn btn-xl btn-focus btn-primary uppercase">
          xlarge
        </button>
      </div>
      <h1>differen butons</h1>
      <div className="flex  items-center gap-2 ">
        <button type="button" className="btn  btn-focus btn-primary uppercase">
          primary
        </button>
        <button
          type="button"
          className="btn btn-square btn-focus btn-primary  uppercase"
        >
          primary
        </button>
        <button
          type="button"
          className="btn btn-pill btn-focus btn-primary  uppercase"
        >
          primary
        </button>
        <button
          type="button"
          className="btn  btn-focus btn-primary-outline uppercase"
        >
          primary
        </button>
        <button
          type="button"
          className="btn btn-square btn-focus btn-primary-outline  uppercase"
        >
          primary
        </button>
        <button
          type="button"
          className="btn btn-pill btn-focus btn-primary-outline  uppercase"
        >
          primary
        </button>
      </div>
      <h1>defualt btns</h1>
      <div className="flex gap-2 flex-wrap">
        <button className="btn btn-focus  btn-primary uppercase">
          {" "}
          primary
        </button>
        <button className="btn btn-focus  btn-secondary uppercase">
          {" "}
          secondary
        </button>
        <button className="btn btn-focus  btn-info uppercase">
          {" "}
          secondary
        </button>
        <button className="btn btn-focus btn-success uppercase">
          {" "}
          success
        </button>
        <button className="btn btn-focus btn-warning uppercase">
          {" "}
          warning
        </button>
        <button className="btn btn-focus btn-danger uppercase">danger</button>
        <button className="btn btn-focus btn-dark uppercase"> dark</button>
        <button className="btn btn-focus btn-light uppercase"> light</button>
        <button className="btn btn-focus btn-purple uppercase"> purple</button>
      </div>
    </div>
  );
}
