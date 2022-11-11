import React, { useState } from "react";
import { apiRequest } from "../utils/apiRequest";

import { InputCustom, InputForModal } from "components/Input";
import { ButtonCustom } from "components/Button";

import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";

const ModalEditRanger = (props) => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-3" className="cursor-pointer">
        <AiFillEdit />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal modal-bottom py-5 sm:modal-middle">
        <div className="bg-white modal-box w-[600px] overflow-auto border p-6">
          <h3 className="font-bold text-lg text-center">Edit Status Ranger</h3>
          <hr className="text-line mt-6" />

          {/* Form Product */}
          <div className="mt-6 mb-5">
            <p className="text-left font-normal text-lg">Status</p>
            <select
              value={props.value}
              onChange={props.onChange}
              id="category"
              class="w-full h-14 border pl-4 rounded-lg text-base mt-2 text-secondary"
            >
              <option value="available">Avaliable</option>
              <option value="duty">Duty</option>
              <option value="off">Off Work</option>
            </select>
          </div>

          <div>
            <p className="text-left font-normal text-lg">Phone Number</p>
            <InputCustom
              value={props.valueNumber}
              onChange={props.onNumber}
              className="w-full h-14 border pl-4 rounded-lg text-base mt-2 text-secondary"
              placeholder="085797556123"
            />
          </div>

          {/* Button Add and Close */}
          <hr className="mt-9" />
          <div>
            <ButtonCustom
              onClick={props.onStatus}
              className="bg-primary mt-6 rounded-lg h-11 w-full flex items-center justify-center font-normal text-sm text-white cursor-pointer"
              label="Edit Info"
            />

            <div className="modal-action">
              <label htmlFor="my-modal-3">
                <ButtonCustom
                  className="border h-11 w-[464px] rounded-lg  flex items-center justify-center font-normal text-sm text-[#999999] cursor-pointer"
                  label="Close"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalAddProduct = (props) => {
  return (
    <div>
      <label
        htmlFor="my-modal-6"
        className="cursor-pointer font-normal text-base text-center justify-center h-12 w-[180px] rounded-lg text-white bg-primary transform active:scale-95 transition-transform flex items-center"
      >
        Add Product
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box rounded-lg relative">
          <h3 className="font-semibold text-xl text-secondary text-center">
            Add New Product
          </h3>
          <div className="divider m-0" />

          {/* Add Photo Product */}
          <div className="mt-6 mb-5">
            <h3 className="font-normal text-secondary text-lg text-left mb-3">
              Photo Product
            </h3>
            <div className="text-left">
              <input
                onChange={props.onChangeAddProduct}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
          </div>

          {/* Input Product Name*/}
          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3">
              Product Name
            </p>
            <InputForModal
              value={props.valueAddProductName}
              onChange={props.onChangeAddProductName}
              placeholder="Enter your product name"
            />
          </div>

          {/* Input Rent Price*/}
          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3">
              Rent Price
            </p>
            <InputForModal
              value={props.valueAddRent}
              onChange={props.onChangeAddRent}
              placeholder="100K"
            />
          </div>

          {/* Input Description*/}
          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3">
              Description
            </p>
            <textarea
              value={props.valueAddDetail}
              onChange={props.onChangeAddDetail}
              className="w-full border border-[#B3B3B3] textarea mt-2 rounded-lg h-40 text-base font-normal"
              placeholder="Enter your product description"
            ></textarea>
          </div>

          {/* Input Note Warning*/}
          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3">
              Warning
            </p>
            <textarea
              value={props.valueAddNote}
              onChange={props.onChangeAddNote}
              className="w-full border border-[#B3B3B3] textarea mt-2 rounded-lg h-40 text-base font-normal"
              placeholder="Enter your product description"
            ></textarea>
          </div>

          <div className="divider m-0" />
          <ButtonCustom
            onClick={props.onAddProduct}
            className="cursor-pointer font-medium text-center justify-center h-11 w-full mt-5 mb-3 rounded-lg text-white bg-primary transform active:scale-95 transition-transform flex items-center"
            label="Add Product"
          />

          <label htmlFor="my-modal-6">
            <ButtonCustom
              className="cursor-pointer font-medium text-center justify-center h-11 w-full rounded-lg text-slate-400 border bg-white transform active:scale-95 transition-transform flex items-center"
              label="Close"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

const ModalEditDataProduct = (props) => {
  return (
    <div>
      <label
        htmlFor="my-modal-5"
        className="text-2xl text-gray-600 cursor-pointer"
      >
        <AiFillEdit id="button-edit-1" />
      </label>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box rounded-lg relative">
          <h3 className="font-semibold text-xl text-secondary text-center">
            Edit Data Product
          </h3>
          <div className="divider m-0" />

          {/* Add Photo Product */}
          <div className="mt-6 mb-5">
            <h3 className="font-normal text-secondary text-lg text-left mb-3">
              Photo Product
            </h3>
            <div className="text-left">
              <input
                id="input-photo-product"
                onChange={props.onChangeProduct}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
          </div>

          {/* Input Product Name*/}
          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3">
              Product Name
            </p>
            <InputForModal
              value={props.valueProductName}
              onChange={props.onChangeProductName}
              id="input-name-product"
              placeholder="Enter your product name"
            />
          </div>

          {/* Input Rent Price*/}
          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3">
              Rent Price
            </p>
            <InputForModal
              id="input-rent-product"
              value={props.valueRent}
              onChange={props.onRent}
              placeholder="100K"
            />
          </div>

          {/* Input Description*/}
          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3">
              Description
            </p>
            <textarea
              id="input-desc-product"
              value={props.valueDescProduct}
              onChange={props.onDescProduct}
              className="w-full border border-[#B3B3B3] textarea mt-2 rounded-lg h-40 text-base font-normal"
              placeholder="Enter your product description"
            ></textarea>
          </div>

          {/* Input Note Warning*/}
          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3">
              Warning
            </p>
            <textarea
              id="input-note-product"
              value={props.valueNoteProduct}
              onChange={props.onNoteProduct}
              className="w-full border border-[#B3B3B3] textarea mt-2 rounded-lg h-40 text-base font-normal"
              placeholder="Enter your product description"
            ></textarea>
          </div>

          <div className="divider m-0" />
          <ButtonCustom
            id="button-addProduct"
            onClick={props.onEditProduct}
            className="cursor-pointer text-base font-medium text-center justify-center h-11 w-full mt-5 mb-3 rounded-lg text-white bg-primary transform active:scale-95 transition-transform flex items-center"
            label="Edit Product"
          />

          <label htmlFor="my-modal-5">
            <ButtonCustom
              id="button-closeProduct"
              className="cursor-pointer text-base font-medium text-center justify-center h-11 w-full rounded-lg text-slate-400 border bg-white transform active:scale-95 transition-transform flex items-center"
              label="Close"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

const ModalAdminUSer = (props) => {
  const [loading, setLoading] = useState(true);
  const [objSubmit, setObjSubmit] = useState("");

  const handleEditData = async () => {
    setLoading(true);

    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest("admin/pendaki", "post", objSubmit)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data berhasil dirubah!",
          showConfirmButton: true,
        });
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = parseInt(value);
    setObjSubmit(temp);
  };

  return (
    <div>
      <label
        id="button-AdminUser"
        htmlFor="my-modal-4"
        className="cursor-pointer font-normal text-base text-center justify-center h-12 w-44 rounded-lg text-white bg-primary transform active:scale-95 transition-transform flex items-center"
      >
        Edit Data
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-lg relative">
          <h3 className="font-semibold text-xl text-secondary text-center">
            Edit Climbers Data
          </h3>
          <div className="divider m-0" />
          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3 mt-6">
              Is Climbers
            </p>
            <InputCustom
              className="h-14 w-full pl-4 border border-[#B3B3B3] rounded-lg text-base font-normal"
              value={objSubmit.is_climber}
              onChange={(e) => handleChange(e.target.value, "is_climber")}
              id="inputIsClimbers"
              type="number"
              placeholder="140"
            />
          </div>

          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3 mt-6">
              Male Climbers
            </p>
            <InputCustom
              className="h-14 w-full pl-4 border border-[#B3B3B3] rounded-lg text-base font-normal"
              value={objSubmit.male_climber}
              onChange={(e) => handleChange(e.target.value, "male_climber")}
              id="inputIsMale"
              type="number"
              placeholder="90"
            />
          </div>

          <div className="mb-5">
            <p className="font-normal text-lg text-secondary text-left mb-3 mt-6">
              Female Climbers
            </p>
            <InputCustom
              className="h-14 w-full pl-4 border border-[#B3B3B3] rounded-lg text-base font-normal"
              value={objSubmit.female_climber}
              onChange={(e) => handleChange(e.target.value, "female_climber")}
              id="inputIsFemale"
              type="number"
              placeholder="60"
            />
          </div>

          <div className="divider m-0" />
          <ButtonCustom
            onClick={() => handleEditData()}
            id="button-EditAdminUsers"
            className="cursor-pointer font-medium text-center justify-center h-11 w-full mt-5 mb-3 rounded-lg text-white bg-primary transform active:scale-95 transition-transform flex items-center"
            label="Edit Info"
          />

          <label htmlFor="my-modal-4">
            <ButtonCustom
              id="button-CloseAdminUsers"
              className="cursor-pointer font-medium text-center justify-center h-11 w-full rounded-lg text-slate-400 border bg-white transform active:scale-95 transition-transform flex items-center"
              label="Close"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export {
  ModalEditRanger,
  ModalAddProduct,
  ModalEditDataProduct,
  ModalAdminUSer,
};
