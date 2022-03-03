class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }
    set name(aString) { this._name = aString; }
    get name() { return this._name; }
    set country(aString) { this._country = aString; }
    get country() { return this._country; }
}

const organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getOrganization() {return organization;}

export {getOrganization};