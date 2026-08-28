/* ==========================================================================
   TASKFLOW DOMAIN MODEL: BILLINGPLAN
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Enterprise SaaS subscription plan and quota limits.
 */
export class BillingPlanModel {
  constructor(data = {}) {
    this._id = data.id || `billingplan-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._planName = data.planName !== undefined ? data.planName : 'Enterprise';
    this._monthlyCost = data.monthlyCost !== undefined ? data.monthlyCost : 299;
    this._storageLimitMb = data.storageLimitMb !== undefined ? data.storageLimitMb : 50000;
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get planName() {
    return this._planName;
  }

  set planName(val) {
    const prev = this._planName;
    if (prev !== val) {
      this.validateAttribute('planName', val);
      this._planName = val;
      this.markDirty('planName', prev, val);
    }
  }

  get monthlyCost() {
    return this._monthlyCost;
  }

  set monthlyCost(val) {
    const prev = this._monthlyCost;
    if (prev !== val) {
      this.validateAttribute('monthlyCost', val);
      this._monthlyCost = val;
      this.markDirty('monthlyCost', prev, val);
    }
  }

  get storageLimitMb() {
    return this._storageLimitMb;
  }

  set storageLimitMb(val) {
    const prev = this._storageLimitMb;
    if (prev !== val) {
      this.validateAttribute('storageLimitMb', val);
      this._storageLimitMb = val;
      this.markDirty('storageLimitMb', prev, val);
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
    const event = { targetId: this._id, model: 'BillingPlan', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for BillingPlan.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for BillingPlan.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for BillingPlan.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for BillingPlan.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for BillingPlan.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for BillingPlan.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for BillingPlan.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for BillingPlan.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for BillingPlan.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for BillingPlan.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for BillingPlan.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for BillingPlan.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for BillingPlan.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for BillingPlan.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for BillingPlan.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for BillingPlan.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for BillingPlan.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for BillingPlan.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for BillingPlan.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for BillingPlan.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for BillingPlan.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for BillingPlan.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for BillingPlan.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for BillingPlan.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for BillingPlan.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for BillingPlan.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for BillingPlan.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for BillingPlan.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for BillingPlan.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for BillingPlan.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for BillingPlan.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for BillingPlan.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for BillingPlan.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for BillingPlan.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for BillingPlan.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for BillingPlan.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for BillingPlan.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for BillingPlan.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for BillingPlan.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for BillingPlan.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for BillingPlan.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for BillingPlan.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for BillingPlan.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for BillingPlan.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingPlan entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGPLAN-44',
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
      planName: this._planName,
      monthlyCost: this._monthlyCost,
      storageLimitMb: this._storageLimitMb,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new BillingPlanModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}