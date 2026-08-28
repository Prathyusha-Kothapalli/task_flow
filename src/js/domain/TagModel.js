/* ==========================================================================
   TASKFLOW DOMAIN MODEL: TAG
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Custom label and tag taxonomy entity.
 */
export class TagModel {
  constructor(data = {}) {
    this._id = data.id || `tag-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._name = data.name !== undefined ? data.name : '';
    this._color = data.color !== undefined ? data.color : '#3b82f6';
    this._usageCount = data.usageCount !== undefined ? data.usageCount : 0;
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

  get usageCount() {
    return this._usageCount;
  }

  set usageCount(val) {
    const prev = this._usageCount;
    if (prev !== val) {
      this.validateAttribute('usageCount', val);
      this._usageCount = val;
      this.markDirty('usageCount', prev, val);
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
    const event = { targetId: this._id, model: 'Tag', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for Tag.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for Tag.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for Tag.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for Tag.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for Tag.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for Tag.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for Tag.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for Tag.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for Tag.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for Tag.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for Tag.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for Tag.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for Tag.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for Tag.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for Tag.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for Tag.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for Tag.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for Tag.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for Tag.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for Tag.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for Tag.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for Tag.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for Tag.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for Tag.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for Tag.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for Tag.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for Tag.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for Tag.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for Tag.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for Tag.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for Tag.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for Tag.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for Tag.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for Tag.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for Tag.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for Tag.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for Tag.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for Tag.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for Tag.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for Tag.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for Tag.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for Tag.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for Tag.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for Tag.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('Tag entity is soft deleted.');
    const result = {
      ruleId: 'RULE-TAG-44',
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
      color: this._color,
      usageCount: this._usageCount,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new TagModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}