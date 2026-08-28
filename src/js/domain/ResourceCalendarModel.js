/* ==========================================================================
   TASKFLOW DOMAIN MODEL: RESOURCECALENDAR
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Resource holiday and PTO availability calendar model.
 */
export class ResourceCalendarModel {
  constructor(data = {}) {
    this._id = data.id || `resourcecalendar-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._userId = data.userId !== undefined ? data.userId : '';
    this._ptoDate = data.ptoDate !== undefined ? data.ptoDate : '';
    this._reason = data.reason !== undefined ? data.reason : 'Vacation';
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

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

  get ptoDate() {
    return this._ptoDate;
  }

  set ptoDate(val) {
    const prev = this._ptoDate;
    if (prev !== val) {
      this.validateAttribute('ptoDate', val);
      this._ptoDate = val;
      this.markDirty('ptoDate', prev, val);
    }
  }

  get reason() {
    return this._reason;
  }

  set reason(val) {
    const prev = this._reason;
    if (prev !== val) {
      this.validateAttribute('reason', val);
      this._reason = val;
      this.markDirty('reason', prev, val);
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
    const event = { targetId: this._id, model: 'ResourceCalendar', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for ResourceCalendar.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('ResourceCalendar entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RESOURCECALENDAR-44',
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
      userId: this._userId,
      ptoDate: this._ptoDate,
      reason: this._reason,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new ResourceCalendarModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}