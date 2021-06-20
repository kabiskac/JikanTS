// Imports
import ow from "ow";

// Interfaces
import { CharacterById } from "interfaces/character/ById";
import { Pictures } from "./interfaces/character/Pictures";

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches the anime with the given ID
 *
 * @param id - The anime id
 */
const byId = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await queue.add(
      async () => await api(`/character/${id}`, {})
    );

    return body as CharacterById;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches pictures related to the item
 *
 * @param id - The character id
 */
const pictures = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await queue.add(
      async () => await api(`/character/${id}/pictures`, {})
    );

    return body as Pictures;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  byId,
  pictures
};
