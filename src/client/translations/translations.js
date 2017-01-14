import keys from './keys';

const resources = {
  "hr": {
    "translation": {
      [keys.LOGIN.TITLE]: "Prijava",
      [keys.LOGIN.USERNAME]: "Email",
      [keys.LOGIN.PASSWORD]: "Lozinka",
      [keys.LOGIN.CONFIRM]: "Kreni",
      [keys.BUDGET_ITEM.CARD_TITLE]: "Stavka proračuna",
      [keys.BUDGET_ITEM.POSITION]: "Pozicija",
      [keys.BUDGET_ITEM.DESCRIPTION]: "Opis",
      [keys.BUDGET_ITEM.AMOUNT]: "Iznos",
      [keys.BUDGET_ITEM.AMOUNT_ERROR]: "Unesite ispravan iznos",
      [keys.BUDGET_ITEM.CONFIRM]: "OK",
      [keys.BUDGET_ITEM.CANCEL]: "Odustani"
    }
  },
  "en": {
    "translation": {
      [keys.LOGIN.TITLE]: "Log In",
      [keys.LOGIN.USERNAME]: "Email",
      [keys.LOGIN.PASSWORD]: "Password",
      [keys.LOGIN.CONFIRM]: "Go",
      [keys.BUDGET_ITEM.CARD_TITLE]: "Budget Item",
      [keys.BUDGET_ITEM.POSITION]: "Position",
      [keys.BUDGET_ITEM.DESCRIPTION]: "Description",
      [keys.BUDGET_ITEM.AMOUNT]: "Amount",
      [keys.BUDGET_ITEM.AMOUNT_ERROR]: "Enter a valid amount",
      [keys.BUDGET_ITEM.CONFIRM]: "OK",
      [keys.BUDGET_ITEM.CANCEL]: "Cancel"
    }
  }
};

export default resources;
