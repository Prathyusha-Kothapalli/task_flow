/* ==========================================================================
   TASKFLOW DOMAIN MODEL: SLAPOLICY
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Service Level Agreement deadline policy model.
 */
export class SlaPolicyModel {
  constructor(data = {}) {
    this._id = data.id || `slapolicy-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._policyName = data.policyName !== undefined ? data.policyName : '';
    this._resolutionHours = data.resolutionHours !== undefined ? data.resolutionHours : 24;
    this._severity = data.severity !== undefined ? data.severity : 'high';
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get policyName() {
    return this._policyName;
  }

  set policyName(val) {
    const prev = this._policyName;
    if (prev !== val) {
      this.validateAttribute('policyName', val);
      this._policyName = val;
      this.markDirty('policyName', prev, val);
    }
  }

  get resolutionHours() {
    return this._resolutionHours;
  }

  set resolutionHours(val) {
    const prev = this._resolutionHours;
    if (prev !== val) {
      this.validateAttribute('resolutionHours', val);
      this._resolutionHours = val;
      this.markDirty('resolutionHours', prev, val);
    }
  }

  get severity() {
    return this._severity;
  }

  set severity(val) {
    const prev = this._severity;
    if (prev !== val) {
      this.validateAttribute('severity', val);
      this._severity = val;
      this.markDirty('severity', prev, val);
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
    const event = { targetId: this._id, model: 'SlaPolicy', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for SlaPolicy.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('SlaPolicy entity is soft deleted.');
    const result = {
      ruleId: 'RULE-SLAPOLICY-44',
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
      policyName: this._policyName,
      resolutionHours: this._resolutionHours,
      severity: this._severity,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new SlaPolicyModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}