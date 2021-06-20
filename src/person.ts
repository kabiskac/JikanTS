// Imports
import ow from "ow";

// Interfaces
import { PersonById } from "interfaces/person/ById";

// Utils
import { api, Logger, queue } from "./utils";

/**
 * Fetches the person with the given ID
 *
 * @param id - The person id
 */
const byId = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await queue.add(
      async () => await api(`/person/${id}`, {})
    );

    return body as PersonById;
  } catch (error) {
    Logger.error(error);
  }
};

/**
 * Fetches pictures related to the item
 *
 * @param id - The person id
 */
const pictures = async (id: number) => {
  try {
    ow(id, ow.number.positive);

    const { body } = await queue.add(
      async () => await api(`/person/${id}/pictures`, {})
    );

    return body;
  } catch (error) {
    Logger.error(error);
  }
};

export default {
  byId,
  pictures
};
