import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oPosY, oTimer } from "../../include/object_constants"
import { LevelUpdateInstance as LevelUpdate } from "../LevelUpdate"
import { MARIO_PUNCHING, ACT_GROUP_MASK, ACT_GROUP_AIRBORNE } from "../Mario"
import { cur_obj_push_mario_away } from "../ObjectHelpers"

export const bhv_pole_base_loop = () => {
    const o = ObjectListProc.gCurrentObject
    if (o.rawData[oPosY] - 10.0 < ObjectListProc.gMarioObject[0].rawData[oPosY] &&
        ObjectListProc.gMarioObject[0].rawData[oPosY] < o.rawData[oPosY] + o.hitboxHeight + 30.0) {
        if (o.rawData[oTimer] > 10) {
            if (!(LevelUpdate.gMarioState[0].action & MARIO_PUNCHING) &&
                (LevelUpdate.gMarioState[0].action & ACT_GROUP_MASK) != ACT_GROUP_AIRBORNE
            ) {
                cur_obj_push_mario_away(70.0)
            }
        }
    }
}