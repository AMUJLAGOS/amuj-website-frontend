//

// export const numberWithCommas = (numberString: string | undefined): string => {
//   if (numberString === undefined) {
//     return "N/A";
//   }

//   const number = parseFloat(numberString.replace(/,/g, ""));
//   return isNaN(number) ? "N/A" : number.toLocaleString();
// };

export const numberWithCommas = (number: any | undefined): string => {
  if (number === undefined) {
    return "N/A";
  }

  return number.toLocaleString();
};

// Function to update an object in the array
export const updateQuantityByName = (
  array: any,
  productSlug: any,
  newQuantity: any
) => {
  const objectIndex = array.findIndex((obj: any) => obj.slug === productSlug);

  if (objectIndex !== -1) {
    const updatedObject = { ...array[objectIndex], quantity: newQuantity };
    const newArray = [
      ...array.slice(0, objectIndex),
      updatedObject,
      ...array.slice(objectIndex + 1),
    ];
    console.log(newArray);
    return newArray;
  }
  console.log("No new");
  return array;
};

export function validateEmail(email: string) {
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export const isEmpty = (arg: string) => {
  return arg.length == 0;
};

export const sortByProperty = (property: any) => {
  return (a: any, b: any) => {
    const nameA = a[property].toUpperCase();
    const nameB = b[property].toUpperCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0;
  };
};

export function arraysEqual(arr1: any, arr2: any) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// useEffect(() => {
//   console.log(newIn);
//   if (filterBy.length === 0) {
//     setFiltered(newInProducts);
//   } else {
//     const filteredArray = filtered.filter((obj: any) => {
//       return filter.every((prop, index) => obj[prop] === filterBy[index]);
//     });
//     const filteredArray = filtered.filter((obj: any) =>
//       filterBy.includes(obj.category)
//     );
//     if (filtered !== filteredArray) {
//       console.log("not at all");
//       setFiltered(filteredArray);
//     }

//     console.log(filtered);
//     console.log(filterBy);
//     console.log(filteredArray);

//     if (filterCategory === "category") {
//       const filtering = newInProducts?.filter(
//         (obj: any, index: any) => obj.category === filterBy
//       );
//       setFiltered(filtering);
//     } else if (filterCategory === "colors") {
//       const filtering = newInProducts?.filter(
//         (obj: any, index: any) => obj.color === filterBy
//       );
//       setFiltered(filtering);
//     } else if (filterCategory === "order by") {
//       const filtering = newInProducts?.sort(sortByProperty("name"));
//       setFiltered(filtering);
//     }
//   }

//   console.log(filterBy);
// }, [
//   filter,
//   filterBy,
//   filterCategory,
//   filtered,
//   newIn,
//   newInProducts,
//   setFiltered,
// ]);
