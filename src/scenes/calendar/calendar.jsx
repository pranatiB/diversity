import React from 'react'
import {models} from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';

const Calendar = () => {
  return (
  
        <PowerBIEmbed
            embedConfig = {{
                type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                id: 'bdd386c2-bdb9-4efc-b673-f9eea0d9df90',
                embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=bdd386c2-bdb9-4efc-b673-f9eea0d9df90&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d',
                accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYTdhYmVkYmYtZjM5OC00OWU5LThhNTAtYTZkMWQyOGZhNjAwLyIsImlhdCI6MTY4OTAxNTEyNSwibmJmIjoxNjg5MDE1MTI1LCJleHAiOjE2ODkwMTk0NDgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUEzaVo0WjQ1SjBudmk4WjUxMksvNTBWRVUxd2VFWW5KWXhqdlY1RFpHVXZhTFdwUzZRN0RGWlVKUVQ2SjZFOXl6IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiRG90IiwiZ2l2ZW5fbmFtZSI6IkNhZCIsImlwYWRkciI6IjI0MDU6MjAxOjU6MjA5NDozNGMzOjZjOWI6NGY2NTo0MWUxIiwibmFtZSI6IkNhZCBEb3QiLCJvaWQiOiIzNmFjMzVlNS1hOWEzLTQ4ZmItYWUyNi1mZDNiMDE4M2UwMzUiLCJwdWlkIjoiMTAwMzIwMDJCRUQ2MzRBMiIsInJoIjoiMC5BVllBdi0ycnA1ano2VW1LVUtiUjBvLW1BQWtBQUFBQUFBQUF3QUFBQUFBQUFBQ2ZBTHcuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiaENFNGZaUDRncktvUHRHc212OGE0OVR4bjJZNnpLOUNLRkdkcDJzaG9XZyIsInRpZCI6ImE3YWJlZGJmLWYzOTgtNDllOS04YTUwLWE2ZDFkMjhmYTYwMCIsInVuaXF1ZV9uYW1lIjoiY2Fkb3QzMjAyN0BpdHVyY2hpYS5jb20iLCJ1cG4iOiJjYWRvdDMyMDI3QGl0dXJjaGlhLmNvbSIsInV0aSI6IkNGS1d2VGJacVVPMzRoVm9ZWm9jQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.QaP4O7mH5-URWZu_sf1Eb2uTeISBXkGOUMvVuJhwRUw0T3voZqj_nH_FRDeQo3TjG_cZ61zAoVLl2xbAHobm_gHQSKnpNOemehZDPk-R9snov74ebcC3FqwhYQ4yYQHmvjSInX2qcVIlapzDWxzrBD6XSMpC_fA2pFqS_sG-eIDdBjZQy7vLtm3vYpkVLKD7X2ZbrH0yrJQCGnTwZZrPz5A0g8EmZdD_VLBBE5-IonNp9oewqlZnm1k2Lva9-VmQOGbQ5eQdQW-mSZ0PptpcvAEA2EbbJY0c-4xIQmsopV2nD1JIW4omJd_ilkGExtNjfc3pCLO1cIvEG3u_Kt7Mrg',
                tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
                settings: {
                    panes: {
                        filters: {
                            expanded: false,
                            visible: false
                        }
                    },
                    background: models.BackgroundType.Transparent,
                }
            }}

            eventHandlers = {
                new Map([
                    ['loaded', function () {console.log('Report loaded');}],
                    ['rendered', function () {console.log('Report rendered');}],
                    ['error', function (event) {console.log(event.detail);}],
                    ['visualClicked', () => console.log('visual clicked')],
                    ['pageChanged', (event) => console.log(event)],
                ])
            }

            cssClassName = { "reportClass" }

            getEmbeddedComponent = { (embeddedReport) => {
                window.report = embeddedReport;
            }}
        />

  )
}

export default Calendar;