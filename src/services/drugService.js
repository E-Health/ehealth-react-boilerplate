import crudService from "./crudService";
import contextService from "./contextService";

export default class drugService {


  static getDrugs(message) {
    const context = contextService.getConfig();
    console.log(context);
    context.params.add({
      name: "message",
      value: message
    });
    return crudService.postResource(context)
  }

}
