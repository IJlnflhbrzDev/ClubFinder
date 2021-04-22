function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchClub = function (keyword) {
    const filteredClubs = clubs.filter((club) => {
        // Jika Mengunaan Seperti ini , ketika user search data club harus sama dengan nama dan kapital penulisanya baru data nya muncul contoh Chelsea
        // return club.name.includes(keyword);

        // Jika Mengunakan Seperti ini, Ketika user search data club tidak dengan penamaan kapital nya data nya tetap muncul (  contoh ChElSeA )
        return club.name.toUpperCase().includes(keyword.toUpperCase())
    });

    if (filteredClubs) {
        this.onSuccess(filteredClubs);
    } else {
        this.onFailed(`${keyword} IS NOT UNDEFINED`);
    }
    console.log(keyword);
};

