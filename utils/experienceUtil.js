export const getTotalExpYears = () => {
    let date1 = new Date(2020, 6, 28);
    let date2 = new Date();
    let year1 = date1.getFullYear();
    let year2 = date2.getFullYear();
    let month1 = date1.getMonth();
    let month2 = date2.getMonth();
    if (month1 === 0) {
        month1++;
        month2++;
    }
    return (((year2 - year1) * 12 + (month2 - month1) - 1) / 12).toFixed(1);
};
