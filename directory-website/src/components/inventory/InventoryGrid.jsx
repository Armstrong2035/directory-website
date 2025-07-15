import React from "react";
import ListingGrid from "../listing/prev-version/ListingGrid";

const InventoryGrid = ({ listings = [], onAddClick }) => {
  return (
    <ListingGrid
      listings={listings}
      onAddClick={onAddClick}
      title="My Inventory"
      emptyMessage="No inventory listings found. Add your first listing!"
    />
  );
};

export default InventoryGrid;
