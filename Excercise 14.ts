//* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//* Solution:-

export const guestList: string[] = ["Ikram", "Adeel", "Abubakar"];

for (let k = 0; k < guestList.length; k++) {
  console.log(`Mr. ${guestList[k]}, I am inviting you dinner tonight `);
}
