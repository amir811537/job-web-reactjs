const Categotylist = () => {
  return (
    <div>
      <h2 className="text-center text-5xl">Job Category List</h2>
      <p
        className="
       text-center"
      >
        {" "}
        Explore thousands of job opportunities with all the information you need
        . its your future{" "}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded p-7">
          <div>
            <img src="/src/assets/icons/accounts.png" alt="" />
          </div>
          <div>
            <p>Account & Finance</p>
          </div>
          <div>300 Jobs Available</div>
        </div>

        <div className="bg-gray-50 p-7">
          <div>
            <img src="/src/assets/icons/creative.png" alt="" />
          </div>
          <div>
            <p>Creative Design</p>
          </div>
          <div>100+ Jobs Available</div>
        </div>

        <div className="bg-gray-50 p-7">
          <div>
            <img src="/src/assets/icons/marketing.png" alt="" />
          </div>
          <div>
            <p>Marketing & Sales</p>
          </div>
          <div>150 Jobs Available</div>
        </div>

        <div className="bg-gray-50 p-7">
          <div>
            <img src="/src/assets/icons/chip.png" alt="" />
          </div>
          <div>
            <p>Engineering Job</p>
          </div>
          <div>224 Jobs Available</div>
        </div>
      </div>
    </div>
  );
};

export default Categotylist;
