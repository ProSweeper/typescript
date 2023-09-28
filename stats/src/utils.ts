export const dateStringToDate = (dateString: string): Date => {
	const dateParts = dateString.split("/");
	const [day, month, year] = dateParts.map((value) => parseInt(value))
	return new Date(year, month, day);
}