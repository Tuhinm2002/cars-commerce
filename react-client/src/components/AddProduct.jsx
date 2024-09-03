import React from "react";



export default function AddProduct(){

    return(
    <form class="row g-3 mt-4 ml-2">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Vehicle Name</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Vehicle Category</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Vehicle model</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Vehicle brand</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Date</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="mb-3">
  <label for="formFileMultiple" class="form-label">Vehicle image</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple />
</div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
);
}