/* ==========================================================================
   TASKFLOW DOMAIN MODEL: SPRINT
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Agile sprint iteration tracking start/end dates and commitment capacity.
 */
export class SprintModel {
  constructor(data = {}) {
    this._id = data.id || `sprint-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._projectId = data.projectId !== undefined ? data.projectId : '';
    this._sprintName = data.sprintName !== undefined ? data.sprintName : '';
    this._goal = data.goal !== undefined ? data.goal : '';
    this._status = data.status !== undefined ? data.status : 'planning';
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

  get sprintName() {
    return this._sprintName;
  }

  set sprintName(val) {
    const prev = this._sprintName;
    if (prev !== val) {
      this.validateAttribute('sprintName', val);
      this._sprintName = val;
      this.markDirty('sprintName', prev, val);
    }
  }

  get goal() {
    return this._goal;
  }

  set goal(val) {
    const prev = this._goal;
    if (prev !== val) {
      this.validateAttribute('goal', val);
      this._goal = val;
      this.markDirty('goal', prev, val);
    }
  }

  get status() {
    return this._status;
  }

  set status(val) {
    const prev = this._status;
    if (prev !== val) {
      this.validateAttribute('status', val);
      this._status = val;
      this.markDirty('status', prev, val);
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
    const event = { targetId: this._id, model: 'Sprint', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for Sprint.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for Sprint.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for Sprint.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for Sprint.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for Sprint.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for Sprint.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for Sprint.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for Sprint.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for Sprint.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for Sprint.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for Sprint.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for Sprint.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for Sprint.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for Sprint.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for Sprint.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for Sprint.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for Sprint.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for Sprint.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for Sprint.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for Sprint.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for Sprint.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for Sprint.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for Sprint.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for Sprint.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for Sprint.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for Sprint.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for Sprint.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for Sprint.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for Sprint.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for Sprint.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for Sprint.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for Sprint.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for Sprint.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for Sprint.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for Sprint.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for Sprint.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for Sprint.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for Sprint.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for Sprint.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for Sprint.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for Sprint.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for Sprint.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for Sprint.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for Sprint.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('Sprint entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SPRINT-44',
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
      sprintName: this._sprintName,
      goal: this._goal,
      status: this._status,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new SprintModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}