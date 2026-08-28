/* ==========================================================================
   TASKFLOW DOMAIN MODEL: BILLINGINVOICE
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Enterprise monthly invoice billing ledger model.
 */
export class BillingInvoiceModel {
  constructor(data = {}) {
    this._id = data.id || `billinginvoice-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._orgId = data.orgId !== undefined ? data.orgId : '';
    this._amount = data.amount !== undefined ? data.amount : 299;
    this._paymentStatus = data.paymentStatus !== undefined ? data.paymentStatus : 'paid';
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get orgId() {
    return this._orgId;
  }

  set orgId(val) {
    const prev = this._orgId;
    if (prev !== val) {
      this.validateAttribute('orgId', val);
      this._orgId = val;
      this.markDirty('orgId', prev, val);
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    const prev = this._amount;
    if (prev !== val) {
      this.validateAttribute('amount', val);
      this._amount = val;
      this.markDirty('amount', prev, val);
    }
  }

  get paymentStatus() {
    return this._paymentStatus;
  }

  set paymentStatus(val) {
    const prev = this._paymentStatus;
    if (prev !== val) {
      this.validateAttribute('paymentStatus', val);
      this._paymentStatus = val;
      this.markDirty('paymentStatus', prev, val);
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
    const event = { targetId: this._id, model: 'BillingInvoice', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for BillingInvoice.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('BillingInvoice entity is soft deleted.');
    const result = {
      ruleId: 'RULE-BILLINGINVOICE-44',
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
      orgId: this._orgId,
      amount: this._amount,
      paymentStatus: this._paymentStatus,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new BillingInvoiceModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}