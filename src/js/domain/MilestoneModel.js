/* ==========================================================================
   TASKFLOW DOMAIN MODEL: MILESTONE
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Project milestone phase entity with target completion dates.
 */
export class MilestoneModel {
  constructor(data = {}) {
    this._id = data.id || `milestone-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._projectId = data.projectId !== undefined ? data.projectId : '';
    this._title = data.title !== undefined ? data.title : '';
    this._targetDate = data.targetDate !== undefined ? data.targetDate : '';
    this._isReached = data.isReached !== undefined ? data.isReached : false;
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get projectId() {
    return this._projectId;
  }

  set projectId(val) {
    const prev = this._projectId;
    if (prev !== val) {
      this.validateAttribute('projectId', val);
      this._projectId = val;
      this.markDirty('projectId', prev, val);
    }
  }

  get title() {
    return this._title;
  }

  set title(val) {
    const prev = this._title;
    if (prev !== val) {
      this.validateAttribute('title', val);
      this._title = val;
      this.markDirty('title', prev, val);
    }
  }

  get targetDate() {
    return this._targetDate;
  }

  set targetDate(val) {
    const prev = this._targetDate;
    if (prev !== val) {
      this.validateAttribute('targetDate', val);
      this._targetDate = val;
      this.markDirty('targetDate', prev, val);
    }
  }

  get isReached() {
    return this._isReached;
  }

  set isReached(val) {
    const prev = this._isReached;
    if (prev !== val) {
      this.validateAttribute('isReached', val);
      this._isReached = val;
      this.markDirty('isReached', prev, val);
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
    const event = { targetId: this._id, model: 'Milestone', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for Milestone.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for Milestone.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for Milestone.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for Milestone.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for Milestone.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for Milestone.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for Milestone.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for Milestone.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for Milestone.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for Milestone.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for Milestone.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for Milestone.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for Milestone.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for Milestone.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for Milestone.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for Milestone.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for Milestone.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for Milestone.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for Milestone.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for Milestone.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for Milestone.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for Milestone.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for Milestone.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for Milestone.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for Milestone.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for Milestone.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for Milestone.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for Milestone.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for Milestone.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for Milestone.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for Milestone.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for Milestone.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for Milestone.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for Milestone.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for Milestone.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for Milestone.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for Milestone.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for Milestone.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for Milestone.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for Milestone.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for Milestone.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for Milestone.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for Milestone.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for Milestone.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('Milestone entity is soft deleted.');
    const result = {
      ruleId: 'RULE-MILESTONE-44',
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
      projectId: this._projectId,
      title: this._title,
      targetDate: this._targetDate,
      isReached: this._isReached,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new MilestoneModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}