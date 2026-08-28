/* ==========================================================================
   TASKFLOW DOMAIN MODEL: ACTIVITYLOG
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * System audit trail activity log entity capturing user mutations.
 */
export class ActivityLogModel {
  constructor(data = {}) {
    this._id = data.id || `activitylog-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._actorId = data.actorId !== undefined ? data.actorId : '';
    this._actionType = data.actionType !== undefined ? data.actionType : '';
    this._resourceId = data.resourceId !== undefined ? data.resourceId : '';
    this._details = data.details !== undefined ? data.details : {};
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get actorId() {
    return this._actorId;
  }

  set actorId(val) {
    const prev = this._actorId;
    if (prev !== val) {
      this.validateAttribute('actorId', val);
      this._actorId = val;
      this.markDirty('actorId', prev, val);
    }
  }

  get actionType() {
    return this._actionType;
  }

  set actionType(val) {
    const prev = this._actionType;
    if (prev !== val) {
      this.validateAttribute('actionType', val);
      this._actionType = val;
      this.markDirty('actionType', prev, val);
    }
  }

  get resourceId() {
    return this._resourceId;
  }

  set resourceId(val) {
    const prev = this._resourceId;
    if (prev !== val) {
      this.validateAttribute('resourceId', val);
      this._resourceId = val;
      this.markDirty('resourceId', prev, val);
    }
  }

  get details() {
    return this._details;
  }

  set details(val) {
    const prev = this._details;
    if (prev !== val) {
      this.validateAttribute('details', val);
      this._details = val;
      this.markDirty('details', prev, val);
    }
  }

  markDirty(attrName, oldVal, newVal) {
    this._updatedAt = new Date().toISOString();
    this._version += 1;
    const record = {
      id: `act-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      attrName,
      oldVal,
      newVal,
      timestamp: this._updatedAt
    };
    this._auditTrail.push(record);
    this.notifySubscribers(attrName, oldVal, newVal);
  }

  subscribe(callback) {
    this._listeners.add(callback);
    return () => this._listeners.delete(callback);
  }

  notifySubscribers(attrName, oldVal, newVal) {
    const event = { targetId: this._id, model: 'ActivityLog', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for ActivityLog.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for ActivityLog.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for ActivityLog.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for ActivityLog.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for ActivityLog.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for ActivityLog.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for ActivityLog.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for ActivityLog.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for ActivityLog.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for ActivityLog.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for ActivityLog.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for ActivityLog.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for ActivityLog.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for ActivityLog.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for ActivityLog.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for ActivityLog.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for ActivityLog.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for ActivityLog.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for ActivityLog.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for ActivityLog.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for ActivityLog.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for ActivityLog.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for ActivityLog.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for ActivityLog.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for ActivityLog.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for ActivityLog.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for ActivityLog.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for ActivityLog.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for ActivityLog.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for ActivityLog.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for ActivityLog.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for ActivityLog.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for ActivityLog.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for ActivityLog.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for ActivityLog.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for ActivityLog.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for ActivityLog.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for ActivityLog.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for ActivityLog.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for ActivityLog.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for ActivityLog.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for ActivityLog.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for ActivityLog.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for ActivityLog.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('ActivityLog entity is soft deleted.');
    const result = {
      ruleId: 'RULE-ACTIVITYLOG-44',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$44`, result);
    return result;
  }

  toJSON() {
    return {
      id: this._id,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
      version: this._version,
      isDeleted: this._isDeleted,
      auditTrail: this._auditTrail,
      actorId: this._actorId,
      actionType: this._actionType,
      resourceId: this._resourceId,
      details: this._details,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new ActivityLogModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}