import React from "react";
import ListingGrid from "../listing/ListingGrid";

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
