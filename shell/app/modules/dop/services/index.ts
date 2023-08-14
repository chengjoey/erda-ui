// Copyright (c) 2021 Terminus, Inc.
//
// This program is free software: you can use, redistribute, and/or modify
// it under the terms of the GNU Affero General Public License, version 3
// or later ("AGPL"), as published by the Free Software Foundation.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

import agent from 'agent';
import { RES_BODY } from 'core/service';

export interface Report {
  projectID: string;
  projectName: string;
  empProjectCode: string;
  budgetMandayTotal: string;
  taskEstimatedManday: string;
  actualMandayTotal: string;
  unfinishedAssigneeTotal: string;
  requirementTotal: string;
  requirementAssociatedTotal: string;
  requirementUnassignedRate: string;
  taskTotal: string;
  taskDoneRate: string;
  taskAssociatedRate: string;
  bugTotal: string;
  bugUndoneRate: string;
  bugSeriousRate: string;
  bugLowLevelRate: string;
  bugDemandDesignRate: string;
  bugOnlineRate: string;
  bugReopenRate: string;
  requirementDoneRate: string;
}

export const getAddons = (query: {
  type: string;
  value: string;
  projectId?: number;
  workspace?: string | string[];
  displayName?: string[];
}): RES_BODY<ADDON.Instance[]> => {
  return agent
    .get('/api/addons')
    .query(query)
    .then((response: { body: ADDON.Instance[] }) => response.body);
};

export const approves = (payload: PROJECT.Approves) => {
  return agent
    .post('/api/approves')
    .send(payload)
    .then((response: any) => response.body);
};

export const getReports = (payload: Obj): RES_BODY<Report[]> => {
  return agent
    .post('/api/project-report/actions/query')
    .send(payload)
    .then((response: any) => response.body);
};
