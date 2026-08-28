/* ==========================================================================
   TASKFLOW DOMAIN MODEL: RISKMATRIX
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Project risk probability and impact assessment model.
 */
export class RiskMatrixModel {
  constructor(data = {}) {
    this._id = data.id || `riskmatrix-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._projectId = data.projectId !== undefined ? data.projectId : '';
    this._riskTitle = data.riskTitle !== undefined ? data.riskTitle : '';
    this._impactLevel = data.impactLevel !== undefined ? data.impactLevel : 'high';
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

  get riskTitle() {
    return this._riskTitle;
  }

  set riskTitle(val) {
    const prev = this._riskTitle;
    if (prev !== val) {
      this.validateAttribute('riskTitle', val);
      this._riskTitle = val;
      this.markDirty('riskTitle', prev, val);
    }
  }

  get impactLevel() {
    return this._impactLevel;
  }

  set impactLevel(val) {
    const prev = this._impactLevel;
    if (prev !== val) {
      this.validateAttribute('impactLevel', val);
      this._impactLevel = val;
      this.markDirty('impactLevel', prev, val);
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
    const event = { targetId: this._id, model: 'RiskMatrix', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for RiskMatrix.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('RiskMatrix entity is soft deleted.');
    const result = {
      ruleId: 'RULE-RISKMATRIX-44',
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
      riskTitle: this._riskTitle,
      impactLevel: this._impactLevel,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new RiskMatrixModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}