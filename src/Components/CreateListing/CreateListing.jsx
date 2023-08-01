export default function CreateListing() {
  return (
    <div className="flex flex-row bg-blue-50 w-screen">
      <div className="w-2/4 flex justify-center">
        <div className="bg-orange-50 flex flex-col text-left">
          <p className="py-2">Application Deadline</p>
          <input className="mx-3" type="date" name="date" id="applicationDate" />
          <p className="py-2">Salary Range</p>
          <div className="">
            <label htmlFor="from">From</label>
            <input className="mx-3" type="text" name="from" id="rangeFrom" />
            <label htmlFor="to">To</label>
            <input className="mx-3" type="text" name="to" id="rangeFrom" />
          </div>

          <p className="py-2">Working Style</p>
          <input className="mx-3" type="text" name="style" id="style" />

          <p className="py-2">Application Email</p>
          <input className="mx-3" type="email" name="" id="" />
        </div>
      </div>

      <div className="w-2/4 ">
        <p>Job Description</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <p>Requirements</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <p>What we offer</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>

      <button>Post Opening</button>
    </div>
  );
}
