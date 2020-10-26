import Cookie from "js-cookie"

const changeLang = () => {
    let languageString = "tb-lang";
    if (
        Cookie.get(languageString) === undefined ||
        Cookie.get(languageString) === null
    ) {
        Cookie.set(languageString, "en");
        return location.reload();
    }
    Cookie.get(languageString) === "mn"
        ? Cookie.set(languageString, "en")
        : Cookie.set(languageString, "mn");
    location.reload();
};

export default changeLang