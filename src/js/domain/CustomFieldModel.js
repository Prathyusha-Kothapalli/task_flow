/* ==========================================================================
   TASKFLOW DOMAIN MODEL: CUSTOMFIELD
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Dynamic custom attribute field definition model.
 */
export class CustomFieldModel {
  constructor(data = {}) {
    this._id = data.id || `customfield-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._fieldName = data.fieldName !== undefined ? data.fieldName : '';
    this._fieldType = data.fieldType !== undefined ? data.fieldType : 'text';
    this._defaultValue = data.defaultValue !== undefined ? data.defaultValue : '';
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get fieldName() {
    return this._fieldName;
  }

  set fieldName(val) {
    const prev = this._fieldName;
    if (prev !== val) {
      this.validateAttribute('fieldName', val);
      this._fieldName = val;
      this.markDirty('fieldName', prev, val);
    }
  }

  get fieldType() {
    return this._fieldType;
  }

  set fieldType(val) {
    const prev = this._fieldType;
    if (prev !== val) {
      this.validateAttribute('fieldType', val);
      this._fieldType = val;
      this.markDirty('fieldType', prev, val);
    }
  }

  get defaultValue() {
    return this._defaultValue;
  }

  set defaultValue(val) {
    const prev = this._defaultValue;
    if (prev !== val) {
      this.validateAttribute('defaultValue', val);
      this._defaultValue = val;
      this.markDirty('defaultValue', prev, val);
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
    const event = { targetId: this._id, model: 'CustomField', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for CustomField.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for CustomField.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for CustomField.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for CustomField.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for CustomField.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for CustomField.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for CustomField.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for CustomField.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for CustomField.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for CustomField.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for CustomField.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for CustomField.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for CustomField.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for CustomField.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for CustomField.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for CustomField.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for CustomField.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for CustomField.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for CustomField.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for CustomField.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for CustomField.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for CustomField.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for CustomField.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for CustomField.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for CustomField.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for CustomField.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for CustomField.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for CustomField.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for CustomField.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for CustomField.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for CustomField.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for CustomField.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for CustomField.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for CustomField.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for CustomField.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for CustomField.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for CustomField.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for CustomField.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for CustomField.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for CustomField.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for CustomField.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for CustomField.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for CustomField.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for CustomField.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('CustomField entity is soft deleted.');
    const result = {
      ruleId: 'RULE-CUSTOMFIELD-44',
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
      fieldName: this._fieldName,
      fieldType: this._fieldType,
      defaultValue: this._defaultValue,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new CustomFieldModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}