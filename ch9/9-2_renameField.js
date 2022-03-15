class Organization
{
    constructor(data)
    {
        this._title = data.name;
        this._country = data.country;
    }
    get name(){return this._title;}
    set name(arg){this._title=arg;}
    get country(){return this._country;}
    set country(arg){this._country=arg;}
}

const organization = new Organization({name: "애크미 구스베리", country: "GB"});

export {organization};