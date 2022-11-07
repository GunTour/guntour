import React from "react";

import { InputCustom, InputForModal } from "components/Input";
import {
  ButtonCustom,
} from "components/Button";

import { AiFillEdit } from "react-icons/ai";

const ModalEditRanger = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="cursor-pointer">
        <AiFillEdit />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom py-5 sm:modal-middle">
        <div className="bg-white modal-box w-[600px] overflow-auto border p-6">
          <h3 className="font-bold text-lg text-center">Edit Status Ranger</h3>
          <hr className="text-line mt-6" />

          {/* Form Product */}
          <div className="mt-6 mb-5">
            <p className="text-left font-normal text-lg">Status</p>
            <select
              // value={objSubmit.category}
              // onChange={(e) => handleChange(e.target.value, "category")}
              id="category"
              class="w-full h-14 border pl-4 rounded-lg text-base mt-2 text-secondary"
            >
              <option value="avaliable">Avaliable</option>
              <option value="duty">Duty</option>
              <option value="off">Off Work</option>
            </select>
          </div>

          <div>
            <p className="text-left font-normal text-lg">Phone Number</p>
            <InputCustom
              // value={objSubmit.phone}
              // onChange={(e) => handleChange(e.target.value, "phone")}
              className="w-full h-14 border pl-4 rounded-lg text-base mt-2 text-secondary"
              placeholder="085797556123"
            />
          </div>

          {/* Button Add and Close */}
          <hr className="mt-9" />
          <div>
            <ButtonCustom
              // onClick={() => handleEditProduct()}
              className="bg-primary mt-6 rounded-lg h-11 w-full flex items-center justify-center font-normal text-sm text-white cursor-pointer"
              label="Edit Info"
            />

            <div className="modal-action">
              <label htmlFor="my-modal-6">
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

const ModalAdminProduct = () => {
  return (
    <div>
      <label
        htmlFor="my-modal-3"
        className="cursor-pointer font-medium text-lg text-center justify-center h-12 w-[183px] rounded-lg px-6 py-1 text-white bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-black"
      >
        Add Product
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="font-semibold text-xl text-secondary text-center">
            Add Product
          </h3>
          <div className="divider text-[#E2E7E9]" />
          <h3 className="font-normal text-[#373737] text-lg text-left">
              Photo Product
            </h3>
            <div>
      <button
        id="select"
        className="login font-normal text-lg text-center justify-center h-[48px] w-[135px] px-6 py-1 rounded-md text-white bg-[#d9d9d9d9] transform active:scale-95 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span className="font-normal text-lg">Select File</span>
      </button>
    </div>
          <p className="font-normal text-lg text[#373737] text-left">
            Product Name
          </p>
          <InputForModal />
          <p className="font-normal text-lg text[#373737] text-left">
            Rent Price
          </p>
          <InputForModal />
          <p className="font-normal text-lg text[#373737] text-left">
            Description
          </p>
          <input
      className="h-[160px] w-full py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      placeholder="120"
      type="text"
    />
          <div className="divider text-[#E2E7E9]" />
          <ButtonCustom
            className="cursor-pointer font-medium text-center justify-center h-11 w-full px-6 py-1 rounded-lg text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white"
            label="Save"
          />
          <br />
          <label htmlFor="my-modal-3">
            <ButtonCustom
              className="cursor-pointer font-medium text-center justify-center h-11 w-full px-6 py-1 rounded-lg text-[#999999] bg-white transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white"
              label="Close"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

const ModalEditAdminProduct = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-9" className="cursor-pointer">
        <AiFillEdit />
      </label>
      <input type="checkbox" id="my-modal-9" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="font-semibold text-xl text-secondary text-center">
            Edit Product
          </h3>
          <div className="divider text-[#E2E7E9]" />
          <h3 className="font-normal text-[#373737] text-lg text-left">
              Photo Product
            </h3>
            <div>
      <button
        id="select"
        className="login font-normal text-lg text-center justify-center h-[48px] w-[135px] px-6 py-1 rounded-md text-white bg-[#d9d9d9d9] transform active:scale-95 transition-transform flex items-center hover:bg-primary hover:text-white "
      >
        <span className="font-normal text-lg">Select File</span>
      </button>
    </div>
          <p className="font-normal text-lg text[#373737] text-left">
            Product Name
          </p>
          <InputForModal />
          <p className="font-normal text-lg text[#373737] text-left">
            Rent Price
          </p>
          <InputForModal />
          <p className="font-normal text-lg text[#373737] text-left">
            Description
          </p>
          <input
      className="h-[160px] w-full py-2 px-3 border-2 border-[#DDEEED] rounded-lg"
      placeholder="120"
      type="text"
    />
          <hr className="mt-9" />
          <div>
            <ButtonCustom
              className="bg-primary mt-6 rounded-lg h-11 w-full flex items-center justify-center font-normal text-sm text-white cursor-pointer"
              label="Save"
            />

            <div className="modal-action">
              <label htmlFor="my-modal-9">
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

const ModalAdminUSer = () => {
  return (
    <div>
      <label
        htmlFor="my-modal-3"
        className="cursor-pointer font-medium text-lg text-center justify-center h-12 w-[183px] rounded-lg px-6 py-1 text-white bg-[#E5640E] transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-black"
      >
        Edit Data
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="font-semibold text-xl text-secondary text-center">
            Edit Climbers Data
          </h3>
          <div className="divider text-[#E2E7E9]" />
          <p className="font-normal text-lg text[#373737] text-left">
            Is Climbers
          </p>
          <InputForModal />
          <p className="font-normal text-lg text[#373737] text-left">
            Male Climbers
          </p>
          <InputForModal />
          <p className="font-normal text-lg text[#373737] text-left">
            Female Climbers
          </p>
          <InputForModal />
          <div className="divider text-[#E2E7E9]" />
          <ButtonCustom
            className="cursor-pointer font-medium text-center justify-center h-11 w-full px-6 py-1 rounded-lg text-white bg-primary transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white"
            label="Save"
          />
          <br />
          <label htmlFor="my-modal-3">
            <ButtonCustom
              className="cursor-pointer font-medium text-center justify-center h-11 w-full px-6 py-1 rounded-lg text-[#999999] bg-white transform active:scale-75 transition-transform flex items-center hover:bg-primary hover:text-white"
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
  ModalAdminProduct,
  ModalEditAdminProduct,
  ModalAdminUSer,
};
