/* ==========================================================================
   TASKFLOW DOMAIN MODEL: EPICROADMAP
   ========================================================================== */

import { escapeHtml } from '../utils/formatters.js';

/**
 * Strategic product roadmap sequence model.
 */
export class EpicRoadmapModel {
  constructor(data = {}) {
    this._id = data.id || `epicroadmap-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    this._createdAt = data.createdAt || new Date().toISOString();
    this._updatedAt = data.updatedAt || new Date().toISOString();
    this._version = data.version || 1;
    this._isDeleted = false;
    this._auditTrail = data.auditTrail || [];
    this._listeners = new Set();
    this._attributes = new Map();
    this._epicId = data.epicId !== undefined ? data.epicId : '';
    this._quarter = data.quarter !== undefined ? data.quarter : 'Q3-2026';
    this._weight = data.weight !== undefined ? data.weight : 100;
  }

  get id() { return this._id; }
  get createdAt() { return this._createdAt; }
  get updatedAt() { return this._updatedAt; }
  get version() { return this._version; }
  get isDeleted() { return this._isDeleted; }
  get auditTrail() { return [...this._auditTrail]; }

  get epicId() {
    return this._epicId;
  }

  set epicId(val) {
    const prev = this._epicId;
    if (prev !== val) {
      this.validateAttribute('epicId', val);
      this._epicId = val;
      this.markDirty('epicId', prev, val);
    }
  }

  get quarter() {
    return this._quarter;
  }

  set quarter(val) {
    const prev = this._quarter;
    if (prev !== val) {
      this.validateAttribute('quarter', val);
      this._quarter = val;
      this.markDirty('quarter', prev, val);
    }
  }

  get weight() {
    return this._weight;
  }

  set weight(val) {
    const prev = this._weight;
    if (prev !== val) {
      this.validateAttribute('weight', val);
      this._weight = val;
      this.markDirty('weight', prev, val);
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
    const event = { targetId: this._id, model: 'EpicRoadmap', attrName, oldVal, newVal };
    this._listeners.forEach(fn => fn(event));
  }

  validateAttribute(attrName, val) {
    if (val === undefined) throw new Error(`Attribute ${attrName} cannot be undefined.`);
  }

  /**
   * Domain Method #1: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule1(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-1',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$1`, result);
    return result;
  }

  /**
   * Domain Method #2: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule2(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-2',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$2`, result);
    return result;
  }

  /**
   * Domain Method #3: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule3(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-3',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$3`, result);
    return result;
  }

  /**
   * Domain Method #4: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule4(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-4',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$4`, result);
    return result;
  }

  /**
   * Domain Method #5: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule5(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-5',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$5`, result);
    return result;
  }

  /**
   * Domain Method #6: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule6(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-6',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$6`, result);
    return result;
  }

  /**
   * Domain Method #7: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule7(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-7',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$7`, result);
    return result;
  }

  /**
   * Domain Method #8: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule8(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-8',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$8`, result);
    return result;
  }

  /**
   * Domain Method #9: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule9(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-9',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$9`, result);
    return result;
  }

  /**
   * Domain Method #10: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule10(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-10',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$10`, result);
    return result;
  }

  /**
   * Domain Method #11: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule11(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-11',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$11`, result);
    return result;
  }

  /**
   * Domain Method #12: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule12(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-12',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$12`, result);
    return result;
  }

  /**
   * Domain Method #13: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule13(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-13',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$13`, result);
    return result;
  }

  /**
   * Domain Method #14: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule14(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-14',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$14`, result);
    return result;
  }

  /**
   * Domain Method #15: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule15(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-15',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$15`, result);
    return result;
  }

  /**
   * Domain Method #16: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule16(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-16',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$16`, result);
    return result;
  }

  /**
   * Domain Method #17: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule17(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-17',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$17`, result);
    return result;
  }

  /**
   * Domain Method #18: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule18(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-18',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$18`, result);
    return result;
  }

  /**
   * Domain Method #19: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule19(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-19',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$19`, result);
    return result;
  }

  /**
   * Domain Method #20: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule20(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-20',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$20`, result);
    return result;
  }

  /**
   * Domain Method #21: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule21(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-21',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$21`, result);
    return result;
  }

  /**
   * Domain Method #22: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule22(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-22',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$22`, result);
    return result;
  }

  /**
   * Domain Method #23: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule23(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-23',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$23`, result);
    return result;
  }

  /**
   * Domain Method #24: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule24(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-24',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$24`, result);
    return result;
  }

  /**
   * Domain Method #25: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule25(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-25',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$25`, result);
    return result;
  }

  /**
   * Domain Method #26: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule26(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-26',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$26`, result);
    return result;
  }

  /**
   * Domain Method #27: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule27(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-27',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$27`, result);
    return result;
  }

  /**
   * Domain Method #28: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule28(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-28',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$28`, result);
    return result;
  }

  /**
   * Domain Method #29: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule29(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-29',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$29`, result);
    return result;
  }

  /**
   * Domain Method #30: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule30(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-30',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$30`, result);
    return result;
  }

  /**
   * Domain Method #31: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule31(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-31',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$31`, result);
    return result;
  }

  /**
   * Domain Method #32: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule32(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-32',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$32`, result);
    return result;
  }

  /**
   * Domain Method #33: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule33(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-33',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$33`, result);
    return result;
  }

  /**
   * Domain Method #34: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule34(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-34',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$34`, result);
    return result;
  }

  /**
   * Domain Method #35: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule35(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-35',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$35`, result);
    return result;
  }

  /**
   * Domain Method #36: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule36(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-36',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$36`, result);
    return result;
  }

  /**
   * Domain Method #37: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule37(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-37',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$37`, result);
    return result;
  }

  /**
   * Domain Method #38: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule38(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-38',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$38`, result);
    return result;
  }

  /**
   * Domain Method #39: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule39(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-39',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$39`, result);
    return result;
  }

  /**
   * Domain Method #40: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule40(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-40',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$40`, result);
    return result;
  }

  /**
   * Domain Method #41: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule41(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-41',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$41`, result);
    return result;
  }

  /**
   * Domain Method #42: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule42(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-42',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$42`, result);
    return result;
  }

  /**
   * Domain Method #43: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule43(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-43',
      appliedAt: new Date().toISOString(),
      status: 'SUCCESS',
      payload: contextParam,
      entityState: this.toJSON()
    };
    this._attributes.set(`rule_$43`, result);
    return result;
  }

  /**
   * Domain Method #44: Handles operational rule processing for EpicRoadmap.
   */
  processDomainRule44(contextParam = {}) {
    if (this._isDeleted) throw new Error('EpicRoadmap entity is soft deleted.');
    const result = {
      ruleId: 'RULE-EPICROADMAP-44',
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
      epicId: this._epicId,
      quarter: this._quarter,
      weight: this._weight,
    };
  }

  static fromJSON(jsonObj) {
    if (!jsonObj) return null;
    return new EpicRoadmapModel(jsonObj);
  }
  softDelete() { this._isDeleted = true; this.markDirty('isDeleted', false, true); }
}