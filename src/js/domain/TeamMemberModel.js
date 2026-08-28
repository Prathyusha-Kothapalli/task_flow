/* ==========================================================================
   TASKFLOW DOMAIN MODEL: TEAMMEMBER
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Team member entity tracking organizational capacity, workloads, and skills.
 */
export class TeamMemberModel {
  constructor(data = {}) {
    this._id = data.id || `teammember-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._name = data.name !== undefined ? data.name : '';
    this._email = data.email !== undefined ? data.email : '';
    this._role = data.role !== undefined ? data.role : '';
    this._avatar = data.avatar !== undefined ? data.avatar : '';
    this._color = data.color !== undefined ? data.color : '';
    this._capacityHours = data.capacityHours !== undefined ? data.capacityHours : 40;
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get name() {
    return this._name;
  }

  set name(val) {
    const prev = this._name;
    if (prev !== val) {
      this.validateAttribute('name', val);
      this._name = val;
      this.markDirty('name', prev, val);
    }
  }

  get email() {
    return this._email;
  }

  set email(val) {
    const prev = this._email;
    if (prev !== val) {
      this.validateAttribute('email', val);
      this._email = val;
      this.markDirty('email', prev, val);
    }
  }

  get role() {
    return this._role;
  }

  set role(val) {
    const prev = this._role;
    if (prev !== val) {
      this.validateAttribute('role', val);
      this._role = val;
      this.markDirty('role', prev, val);
    }
  }

  get avatar() {
    return this._avatar;
  }

  set avatar(val) {
    const prev = this._avatar;
    if (prev !== val) {
      this.validateAttribute('avatar', val);
      this._avatar = val;
      this.markDirty('avatar', prev, val);
    }
  }

  get color() {
    return this._color;
  }

  set color(val) {
    const prev = this._color;
    if (prev !== val) {
      this.validateAttribute('color', val);
      this._color = val;
      this.markDirty('color', prev, val);
    }
  }

  get capacityHours() {
    return this._capacityHours;
  }

  set capacityHours(val) {
    const prev = this._capacityHours;
    if (prev !== val) {
      this.validateAttribute('capacityHours', val);
      this._capacityHours = val;
      this.markDirty('capacityHours', prev, val);
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
    const event = { targetId: this._id, model: 'TeamMember', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for TeamMember.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for TeamMember.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for TeamMember.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for TeamMember.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for TeamMember.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for TeamMember.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for TeamMember.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for TeamMember.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for TeamMember.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for TeamMember.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for TeamMember.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for TeamMember.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for TeamMember.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for TeamMember.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for TeamMember.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for TeamMember.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for TeamMember.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for TeamMember.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for TeamMember.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for TeamMember.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for TeamMember.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for TeamMember.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for TeamMember.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for TeamMember.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for TeamMember.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for TeamMember.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for TeamMember.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for TeamMember.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for TeamMember.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for TeamMember.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for TeamMember.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for TeamMember.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for TeamMember.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for TeamMember.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for TeamMember.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for TeamMember.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for TeamMember.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for TeamMember.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for TeamMember.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for TeamMember.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for TeamMember.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for TeamMember.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for TeamMember.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for TeamMember.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('TeamMember entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TEAMMEMBER-44',
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
      name: this._name,
      email: this._email,
      role: this._role,
      avatar: this._avatar,
      color: this._color,
      capacityHours: this._capacityHours,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new TeamMemberModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}