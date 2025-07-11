import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/client";

export const createListing = async (listingData, userId, userInfo) => {
  try {
    console.log("Creating listing with data:", {
      listingData,
      userId,
      userInfo,
    });

    // Check if db is properly initialized
    if (!db) {
      throw new Error("Firebase database not initialized");
    }

    // Check if required fields are present
    if (!userId) {
      throw new Error("User ID is required");
    }

    if (!userInfo) {
      throw new Error("User info is required");
    }

    const docRef = await addDoc(collection(db, "listings"), {
      ...listingData,
      userId,
      userInfo: {
        name: userInfo.displayName || userInfo.email,
        email: userInfo.email,
        photoURL: userInfo.photoURL || null,
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: "active",
    });

    console.log("Listing created successfully with ID:", docRef.id);
    return { id: docRef.id, error: null };
  } catch (error) {
    console.error("Error creating listing:", error);
    return { id: null, error: error.message };
  }
};

export const getListings = async (userId = null) => {
  try {
    let q;
    if (userId) {
      // Get listings for specific user
      q = query(
        collection(db, "listings"),
        where("userId", "==", userId),
        orderBy("createdAt", "desc")
      );
    } else {
      // Get all listings
      q = query(collection(db, "listings"), orderBy("createdAt", "desc"));
    }

    const querySnapshot = await getDocs(q);
    const listings = [];

    querySnapshot.forEach((doc) => {
      listings.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return { listings, error: null };
  } catch (error) {
    console.error("Error fetching listings:", error);
    return { listings: [], error: error.message };
  }
};

export const getListing = async (listingId) => {
  try {
    const docRef = doc(db, "listings", listingId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        listing: {
          id: docSnap.id,
          ...docSnap.data(),
        },
        error: null,
      };
    } else {
      return { listing: null, error: "Listing not found" };
    }
  } catch (error) {
    console.error("Error fetching listing:", error);
    return { listing: null, error: error.message };
  }
};
