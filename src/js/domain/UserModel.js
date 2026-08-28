/* ==========================================================================
   TASKFLOW DOMAIN MODEL: USER
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * User authentication entity managing user profiles, preferences, and session tokens.
 */
export class UserModel {
  constructor(data = {}) {
    this._id = data.id || `user-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._email = data.email !== undefined ? data.email : '';
    this._password = data.password !== undefined ? data.password : '';
    this._name = data.name !== undefined ? data.name : '';
    this._role = data.role !== undefined ? data.role : '';
    this._avatar = data.avatar !== undefined ? data.avatar : '';
    this._bio = data.bio !== undefined ? data.bio : '';
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

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

  get password() {
    return this._password;
  }

  set password(val) {
    const prev = this._password;
    if (prev !== val) {
      this.validateAttribute('password', val);
      this._password = val;
      this.markDirty('password', prev, val);
    }
  }

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

  get bio() {
    return this._bio;
  }

  set bio(val) {
    const prev = this._bio;
    if (prev !== val) {
      this.validateAttribute('bio', val);
      this._bio = val;
      this.markDirty('bio', prev, val);
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
    const event = { targetId: this._id, model: 'User', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for User.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for User.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for User.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for User.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for User.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for User.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for User.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for User.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for User.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for User.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for User.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for User.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for User.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for User.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for User.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for User.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for User.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for User.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for User.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for User.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for User.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for User.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for User.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for User.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for User.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for User.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for User.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for User.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for User.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for User.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for User.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for User.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for User.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for User.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for User.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for User.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for User.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for User.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for User.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for User.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for User.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for User.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for User.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for User.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('User entity is soft deleted.');
    const result = {
      ruleId: 'RULE-USER-44',
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
      email: this._email,
      password: this._password,
      name: this._name,
      role: this._role,
      avatar: this._avatar,
      bio: this._bio,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new UserModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}