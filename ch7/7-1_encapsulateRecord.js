class Organization{
    constructor(data) { this._data = data; }
    set name(aString) { this._data.name = aString; }
    get name() { return this._data.name; }
    set country(aString) { this._data.country = aString; }
    get country() { return this._data.country; }
}

const organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getOrganization() {return organization;}

export {getOrganization};