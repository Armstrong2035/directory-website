// components/inventory/ListingModal.jsx
import React from "react";
import SharedListingModal from "../shared/ListingModal";

const ListingModal = ({ open, onClose, onSubmit, isLoading }) => {
  return (
    <SharedListingModal
      open={open}
      onClose={onClose}
      onSubmit={onSubmit}
      isLoading={isLoading}
      title="Add New Listing"
      submitButtonText="Submit"
    />
  );
};

export default ListingModal;
