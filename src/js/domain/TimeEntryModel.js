/* ==========================================================================
   TASKFLOW DOMAIN MODEL: TIMEENTRY
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Work hour log entry tracking actual duration spent on tasks.
 */
export class TimeEntryModel {
  constructor(data = {}) {
    this._id = data.id || `timeentry-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._taskId = data.taskId !== undefined ? data.taskId : '';
    this._userId = data.userId !== undefined ? data.userId : '';
    this._hoursLogged = data.hoursLogged !== undefined ? data.hoursLogged : 0;
    this._logDate = data.logDate !== undefined ? data.logDate : '';
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get taskId() {
    return this._taskId;
  }

  set taskId(val) {
    const prev = this._taskId;
    if (prev !== val) {
      this.validateAttribute('taskId', val);
      this._taskId = val;
      this.markDirty('taskId', prev, val);
    }
  }

  get userId() {
    return this._userId;
  }

  set userId(val) {
    const prev = this._userId;
    if (prev !== val) {
      this.validateAttribute('userId', val);
      this._userId = val;
      this.markDirty('userId', prev, val);
    }
  }

  get hoursLogged() {
    return this._hoursLogged;
  }

  set hoursLogged(val) {
    const prev = this._hoursLogged;
    if (prev !== val) {
      this.validateAttribute('hoursLogged', val);
      this._hoursLogged = val;
      this.markDirty('hoursLogged', prev, val);
    }
  }

  get logDate() {
    return this._logDate;
  }

  set logDate(val) {
    const prev = this._logDate;
    if (prev !== val) {
      this.validateAttribute('logDate', val);
      this._logDate = val;
      this.markDirty('logDate', prev, val);
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
    const event = { targetId: this._id, model: 'TimeEntry', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for TimeEntry.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for TimeEntry.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for TimeEntry.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for TimeEntry.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for TimeEntry.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for TimeEntry.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for TimeEntry.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for TimeEntry.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for TimeEntry.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for TimeEntry.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for TimeEntry.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for TimeEntry.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for TimeEntry.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for TimeEntry.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for TimeEntry.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for TimeEntry.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for TimeEntry.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for TimeEntry.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for TimeEntry.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for TimeEntry.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for TimeEntry.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for TimeEntry.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for TimeEntry.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for TimeEntry.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for TimeEntry.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for TimeEntry.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for TimeEntry.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for TimeEntry.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for TimeEntry.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for TimeEntry.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for TimeEntry.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for TimeEntry.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for TimeEntry.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for TimeEntry.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for TimeEntry.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for TimeEntry.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for TimeEntry.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for TimeEntry.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for TimeEntry.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for TimeEntry.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for TimeEntry.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for TimeEntry.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for TimeEntry.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for TimeEntry.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('TimeEntry entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TIMEENTRY-44',
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
      taskId: this._taskId,
      userId: this._userId,
      hoursLogged: this._hoursLogged,
      logDate: this._logDate,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new TimeEntryModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}