class Organization{
    constructor(data) { this._data = data; }
    set name(aString) { this._data.name = aString; }
}

const organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getRawDataOfOrganization() {return organization._data;}
function getOrganization() {return organization;}

export {getRawDataOfOrganization,getOrganization};